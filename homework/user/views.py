from rest_framework.viewsets import ModelViewSet
from .models import MyUser
from .serializers import MyUserModelSerializer
from django.http import HttpResponse


class MyUserModelViewSet(ModelViewSet):
    queryset = MyUser.objects.all()
    serializer_class = MyUserModelSerializer


def index(request):
    return HttpResponse("<h2>Главная страница</h2>")