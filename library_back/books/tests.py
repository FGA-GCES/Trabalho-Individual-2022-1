from dataclasses import dataclass
import unittest
from .models import Book
from .serializers import BookSerializer


class BookTests(unittest.TestCase):
    def setUp(self) -> None:
        self.book_attr = {
            'title': 'Ensaio sobre a Cegueira',
            'author': 'José Saramago',
            'release_year': 1995,
        }
        self.serializer_data = {
            'title': 'Maus: a história de um sobrevivente',
            'author': 'Art Spiegelman',
        }

        self.book = Book.objects.create(**self.book_attr)
        self.serializer = BookSerializer(instance=self.book)

    def tearDown(self) -> None:
        self.book.delete()

    def test_valid_fields(self):
        valid_fields = ('id', 'title', 'author', 'release_year', 'is_rented', 'renter')
        invalid_fields = ('random_field', 'foo', 'bar')
        data = self.serializer.data
        self.assertEqual(set(data.keys()), set(valid_fields))
        self.assertNotEqual(set(data.keys()), set(invalid_fields))

    def test_invalid_data(self):
        serializer = BookSerializer(data=self.serializer_data)

        self.assertFalse(serializer.is_valid())
        self.assertEqual(set(serializer.errors), set(['release_year']))
