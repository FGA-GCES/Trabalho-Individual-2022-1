from django.contrib.auth.models import User
from django.db import models


class Book(models.Model):
    title = models.CharField(max_length=150)
    author = models.CharField(max_length=150)
    release_year = models.PositiveIntegerField()
    is_rented = models.BooleanField(null=False, default=False)
    renter = models.ForeignKey(
        User,
        on_delete=models.RESTRICT,
        null=True,
        blank=True,
        default=None,
    )

    def __str__(self) -> str:
        return f'{self.title}. {self.author}'

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['title', 'author', 'release_year'],
                name='unique_together_book_keys',
            )
        ]
