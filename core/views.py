from datetime import timedelta
from django.utils import timezone
from django.views.generic import View, TemplateView, UpdateView, CreateView, DeleteView
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from django.urls import reverse_lazy

from .models import Coin, Description, Comision, Citas, Extras
from .forms import DescriptionForm, ComisionForm, CitasForm, ExtrasForm
from contac.models import Contac
from social.models import Social
from domicilio.models import Address
from .signals import create_coin, dolar, cryptoList


class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context

        context = super().get_context_data(**kwargs)
        coin = Coin.objects.all().order_by('-created_date')
        text = Description.objects.all().order_by('-created_date')
        comisions = Comision.objects.all()
        address = Address.objects.all().order_by('-created_date')
        cites = Citas.objects.all().order_by('-created_date')
        extra = Extras.objects.all()
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
        context['comision'] = comisions[0]
        context['address'] = address[0]
        context['cites'] = cites
        context['dolar'] = dolar
        context['extra'] = extra[0]
        context['cryptoList'] = cryptoList
        # Contexto de crytos
        return context


class JavascripView(View):
    def get(self, request, *args, **kwargs):
        all_coin = Coin.objects.all()
        comisions = Comision.objects.all()
        extras_divisas = Extras.objects.all().order_by('-created_date')
        extra = extras_divisas[0]
        coin = all_coin[0]
        comision = comisions[0]
        context = {
            'coin': coin,
            'comision': comision,
            'extra': extra,
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


@method_decorator(login_required, name='dispatch')
class ComisionAdminView(View):
    def get(self, request, *args, **kwargs):
        comision = Comision.objects.all().order_by('-created_date')
        context = {
            'comision': comision[0]
        }
        return render(request, 'comision_admin.html', context)


@method_decorator(login_required, name='dispatch')
class ComisionUpdateView(UpdateView):
    model = Comision
    template_name = 'comision_update_form.html'
    form_class = ComisionForm
    template_name_suffix = '_update_form'
    success_url = reverse_lazy('comisionAdmin')


@method_decorator(login_required, name='dispatch')
class ExtrasAdminView(View):
    def get(self, request, *args, **kwargs):
        extra = Extras.objects.all().order_by('-created_date')
        context = {
            'extra': extra[0]
        }
        return render(request, 'extras_admin.html', context)


@method_decorator(login_required, name='dispatch')
class ExtraUpdateView(UpdateView):
    model = Extras
    template_name = 'extras_update_form.html'
    form_class = ExtrasForm
    template_name_suffix = '_update_form'
    success_url = reverse_lazy('extrasAdmin')


@method_decorator(login_required, name='dispatch')
class CitasAdminView(View):
    def get(self, request, *args, **kwargs):
        citas = Citas.objects.all().order_by('-created_date')
        context = {
            'citas': citas
        }
        return render(request, 'citas_admin.html', context)


@method_decorator(login_required, name='dispatch')
class CitasCreateView(CreateView):
    model = Citas
    form_class = CitasForm
    success_url = reverse_lazy('notesAdmin')
    template_name = 'citas_form.html'

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(CitasCreateView, self).form_valid(form)


@method_decorator(login_required, name='dispatch')
class CitasUpdateView(UpdateView):
    model = Citas
    template_name = 'citas_update_form.html'
    form_class = CitasForm
    template_name_suffix = '_update_form'
    success_url = reverse_lazy('notesAdmin')


@method_decorator(login_required, name='dispatch')
class CitasDeleteView(DeleteView):
    model = Citas
    template_name = 'citas_confirm_delete.html'
    template_name_suffix = '_update_form'
    success_url = reverse_lazy('notesAdmin')
