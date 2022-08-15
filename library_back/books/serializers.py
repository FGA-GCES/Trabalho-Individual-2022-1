from rest_framework.serializers import ModelSerializer
from .models import Book

class BookSerializer(ModelSerializer):
    class Meta:
        model = Book
        fields = ('id', 'title', 'author', 'release_year', 'is_rented', 'renter')

