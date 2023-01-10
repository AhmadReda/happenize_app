from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in happenize_app/__init__.py
from happenize_app import __version__ as version

setup(
	name="happenize_app",
	version=version,
	description="This app made for sales order search bulk",
	author="Ahmed Abd El-Sattar",
	author_email="ahmedreda.abdelsattar@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
