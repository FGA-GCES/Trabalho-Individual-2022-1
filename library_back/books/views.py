from rest_framework.viewsets import ModelViewSet
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated 
from rest_framework.response import Response
from .models import Book
from .serializers import BookSerializer

class BookViewSet(ModelViewSet):
    serializer_class = BookSerializer
    # permission_classes = [IsAuthenticated]

    def get_queryset(self):
        renter = self.request.query_params.get('renter', None)       
        is_rented = self.request.query_params.get('is_rented', None) 

        if renter:
            return Book.objects.filter(renter=renter)

        if is_rented:
            return Book.objects.filter(is_rented=is_rented)

        return Book.objects.all()

    @action(methods=['POST'], detail=True)
    def rent(self, request, pk=None):
        book = self.get_object()
        
        if not 'renter' in request.data.keys():
            return Response(
                {'error': 'could not retrieve renter from request'},
                status=status.HTTP_400_BAD_REQUEST
            )

        renter_id = request.data['renter'] or None
        renter = User.objects.filter(id=renter_id).first()
            
        if book.is_rented:
            book.renter = None
        else:
            book.renter = renter

        book.is_rented = not book.is_rented
        book.save()

        serializer = BookSerializer(book)
        data = serializer.data

        return Response(data, status=status.HTTP_200_OK)
