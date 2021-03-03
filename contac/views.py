from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from django.urls import reverse_lazy
from django.views.generic import CreateView, ListView, UpdateView, DeleteView

from .models import Contac
from .forms import ContacForm


@method_decorator(login_required, name='dispatch')
class ContacListView(ListView):
    template_name = 'contac_list.html'
    model = Contac
    context_object_name = 'contacs'


@method_decorator(login_required, name='dispatch')
class ContacCreateView(CreateView):
    model = Contac
    form_class = ContacForm
    success_url = reverse_lazy('contacList')
    template_name = 'contac_form.html'

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(ContacCreateView, self).form_valid(form)


@method_decorator(login_required, name='dispatch')
class ContacUpdateView(UpdateView):
    model = Contac
    template_name = 'contac_update_form.html'
    form_class = ContacForm
    template_name_suffix = '_update_form'
    success_url = reverse_lazy('contacList')


@method_decorator(login_required, name='dispatch')
class ContacDeleteView(DeleteView):
    model = Contac
    template_name = 'contac_confirm_delete.html'
    template_name_suffix = '_update_form'
    success_url = reverse_lazy('contacList')
