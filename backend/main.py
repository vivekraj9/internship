from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from auth.routes import router as auth_router

# Create the FastAPI instance
app = FastAPI()

# Configure CORS to allow your frontend to access the backend
origins = [
    "http://localhost:5173",  # React frontend running locally
    "http://localhost:3000",  # If using React's default port, update if necessary
    # Add more origins as needed
]

# Add CORS middleware to the app
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows frontend to access backend from these origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

# Include the auth router (you can create your routes in the 'auth.routes')
app.include_router(auth_router, prefix="/auth")

