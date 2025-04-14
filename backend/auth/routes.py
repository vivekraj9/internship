from fastapi import APIRouter, HTTPException
from auth.models import UserCreate, UserLogin, ForgotPassword
from auth.auth_utils import hash_password, verify_password, create_access_token
from db.database import users_collection

router = APIRouter()

@router.post("/register")
def register(user: UserCreate):
    if users_collection.find_one({"email": user.email}):
        raise HTTPException(status_code=400, detail="Email already registered")
    hashed = hash_password(user.password)
    users_collection.insert_one({"email": user.email, "password": hashed})
    return {"message": "User registered successfully"}
@router.get("/")
def test():
    return "Nothing here"
@router.post("/login")
def login(user: UserLogin):
    db_user = users_collection.find_one({"email": user.email})
    if not db_user or not verify_password(user.password, db_user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = create_access_token({"sub": user.email})
    return {"access_token": token, "token_type": "bearer"}

@router.post("/forgot-password")
def forgot_password(data: ForgotPassword):
    user = users_collection.find_one({"email": data.email})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    new_hashed = hash_password(data.new_password)
    users_collection.update_one({"email": data.email}, {"$set": {"password": new_hashed}})
    return {"message": "Password updated successfully"}
