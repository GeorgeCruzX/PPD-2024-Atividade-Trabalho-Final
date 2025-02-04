from flask import Flask, render_template
import requests

app = Flask(__name__)

# URLs dos microserviços
PRODUTOS_URL = "http://produtos:5000/produtos"
CLIENTES_URL = "http://clientes:5001/clientes"
VENDAS_URL = "http://vendas:5002/vendas"

@app.route('/')
def index():
    # Busca dados dos microserviços
    produtos = requests.get(PRODUTOS_URL).json()
    clientes = requests.get(CLIENTES_URL).json()
    vendas = requests.get(VENDAS_URL).json()
    return render_template('index.html', produtos=produtos, clientes=clientes, vendas=vendas)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5003)