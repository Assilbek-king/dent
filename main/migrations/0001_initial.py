# Generated by Django 4.0.4 on 2023-03-01 07:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=300)),
                ('last_name', models.CharField(blank=True, max_length=300)),
                ('job', models.CharField(blank=True, max_length=300)),
                ('logo', models.ImageField(blank=True, upload_to='upload')),
                ('description', models.TextField(blank=True, max_length=500)),
                ('status', models.BooleanField(blank=True, default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Otziv',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=300)),
                ('comment', models.TextField(blank=True, null=True)),
            ],
        ),
    ]