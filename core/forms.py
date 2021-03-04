from django import forms
from .models import Description, Comision


class DescriptionForm(forms.ModelForm):
    class Meta:
        model = Description
        fields = ['descrip', ]
        widgets = {
            'descrip': forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Parrafo'}),
        }
        labels = {
            'descrip': '',
        }


class ComisionForm(forms.ModelForm):
    class Meta:
        model = Comision
        fields = ['sell', 'buy']
        """
        widgets = {
            'sell': forms.Select(attrs={'class': 'selectpicker', 'data-style': 'select-with-transition', 'title': 'Empresa'}),
        }
        """
        labels = {
            'sell': 'Compra (Porcentaje)', 'buy': 'Venta (Porcentaje)',
        }
