from flask_app import app
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_bcrypt import Bcrypt
from flask_app.models import recipe
import re
bcrypt = Bcrypt(app)

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
DB = "recipe_sector"

class User:
    
    def __init__(self, user):
        
        self.id = user["id"]
        self.first_name = user["first_name"]
        self.last_name = user["last_name"]
        self.email = user ["email"]
        self.password = user ["password"]
        self.created_at = user ["created_at"]
        self.updated_at = user["updated_at"]
        self.recipe = []
        
        
    @classmethod
    def get_by_email(cls, email):
        data = {
            "email": email
        }
        query = "SELECT * FROM users WHERE email = %(email)s;"
        result = connectToMySQL(DB).query_db(query, data)
        
        if len(result) < 1 :
            return False
        return cls(result[0])
    
    
    @classmethod
    def get_user_with_routines( cls, data):
        query = "SELECT * FROM users LEFT JOIN recipes ON recipes.user_id = users.id WHERE users.id = %(id)s;"
        results = connectToMySQL(DB).query_db(query, data)
        user = cls (results[0])
        for row_from_db in results:
            recipe_data = {
                "id": row_from_db["recipes.id"],
                "BLANK" : row_from_db["recipes.BLANK"],
                "BLANK" : row_from_db["recipes.BLANK"],
                "BLANK": row_from_db["recipes.BLANK"],
                "BLANK" : row_from_db["recipes.BLANK"],
                "created_at": row_from_db["recipes.created_at"],
                "updated_at": row_from_db["recipes.updated_at"]
            }
            user.recipe.append( recipe.Recipe(recipe_data))
        return user
        
    @classmethod
    def get_by_id(cls, user_id):
        data = {"id": user_id}
        query = "SELECT * FROM users WYERE id = %(id)s;"
        result = connectToMySQL(DB).query_db(query, data)
        
        if len(result) <1:
            return False
        return cls(result[0])
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        user_data = connectToMySQL(DB).query_db(query)
        
        users = []
        for user in user_data:
            users.append(cls(user))
            
        return users
    
    @classmethod
    def authenticated_user_by_input(cls, user_input):
        
        valid = True
        existing_user = cls.get_by_email(user_input["email"])
        password_valid = True
        
        if not existing_user:
            valid = False
            
        else:
            password_valid = bcrypt.check_password_hash(
                existing_user.password, user_input["password"])
            
            if not password_valid:
                valid = False
                
        if not valid:
            flash("Combination does not match our records.")
            return False

        return existing_user
    
    @classmethod
    def create_valid_user(cls, user):
        
        if not cls.is_valid(user):
            return False
        
        pw_hash = bcrypt.generate_password_hash(user["password"])
        user = user.copy()
        user["password"] = pw_hash
        print("User after adding pw:", user)
        
        query = """INSERT INTO users
                (first_name, last_name, email,  password) VALUES (%(first_name)s, %  (last_name)s, %(email)s, %(password)  s);"""
                
        new_user_id = connectToMySQL(DB).query_db(query, user)
        new_user = cls.get_by_id(new_user_id)
        
        return new_user
    
    @classmethod
    def is_valid(cls,user):
        valid = True
        
        
        if len(user["first_name"]) < 3:
            valid = False
            flash("First name must be at least 3 characters.")
        if len(user["last_name"]) < 3:
            valid = False
            flash("Last name must be at least 3 characters")
        if not EMAIL_REGEX.match(user["email"]):
            valid = False
        if len(user["password"]) < 7:
            valid = False
            flash("Password must be at least 7 characters")
        if not user["password"] == user [ "password_confirmation"]:
            flash("Password mus match.")
            valid = False
        
        email_already_has_account = User.get_by_email(user["email"])
        if email_already_has_account:
            flash("An account with that email already exists, please log in.")
            valid = False
            
        return valid
        
        