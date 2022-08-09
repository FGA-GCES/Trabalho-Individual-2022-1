from dataclasses import fields
from pyexpat import model
from rest_framework.serializers import ModelSerializer
from .models import Book

class BookSerializer(ModelSerializer):
    class Meta:
        model = Book
        fields = ('title', 'author', 'release_year', 'user')