from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(MONGO_URI)

db = client["auth_db"]
users_collection = db["users"]

blacklisted_tokens_collection = db["blacklisted_tokens"]