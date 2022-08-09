from rest_framework.serializers import ModelSerializer, CharField
from django.contrib.auth.models import User


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'last_name')

class RegisterSerializer(ModelSerializer):
    password = CharField(max_length=128, min_length=6, write_only=True)
    
    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'last_name', 'password')   

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
