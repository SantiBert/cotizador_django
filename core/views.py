from datetime import timedelta
from django.utils import timezone
from django.views.generic import View, TemplateView, UpdateView
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from django.urls import reverse_lazy

from .models import Coin, Description
from .forms import DescriptionForm
from contac.models import Contac
from social.models import Social
from .signals import create_coin


class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super().get_context_data(**kwargs)
        coin = Coin.objects.all().order_by('-created_date')
        text = Description.objects.all().order_by('-created_date')
        now = timezone.now()
        minus = timedelta(minutes=10)
        if coin:
            coin = coin[0]
            if (coin.created_date - now) > minus:
                context['coin'] = create_coin()
            else:
                context['coin'] = coin
        else:
            context['coin'] = create_coin()
        context['text'] = text[0]
        context['contacs'] = Contac.objects.all()
        context['socials'] = Social.objects.all()

        return context


class JavascripView(View):
    def get(self, request, *args, **kwargs):
        all_coin = Coin.objects.all()
        coin = all_coin[0]
        context = {
            'coin': coin
        }
        return render(request, 'includes/javascript.html', context)


@method_decorator(login_required, name='dispatch')
class AdministrationView(TemplateView):
    template_name = 'administration.html'


@method_decorator(login_required, name='dispatch')
class DescriptionAdminView(View):
    def get(self, request, *args, **kwargs):
        text = Description.objects.all().order_by('-created_date')
        context = {
            'text': text[0]
        }
        return render(request, 'description.html', context)


@method_decorator(login_required, name='dispatch')
class DescriptionUpdateView(UpdateView):
    model = Description
    template_name = 'description_update_form.html'
    form_class = DescriptionForm
    template_name_suffix = '_update_form'
    success_url = reverse_lazy('Descrition')
