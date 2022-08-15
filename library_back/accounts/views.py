from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import RegisterSerializer
from rest_framework.decorators import api_view
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.auth import AuthToken


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login_api(request):
    serializer = AuthTokenSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.validated_data['user']
        _, token = AuthToken.objects.create(user)
        return Response(data={
            'user': {
                'id': user.id,
                'username': user.username,
            },
            'token': token
            },
            status=status.HTTP_201_CREATED
        )
    return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)