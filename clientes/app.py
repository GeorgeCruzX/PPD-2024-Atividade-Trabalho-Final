from flask import Flask, jsonify, request

app = Flask(__name__)

clientes = []

@app.route('/clientes', methods=['POST'])
def cadastrar_cliente():
    data = request.json
    clientes.append(data)
    return jsonify({"message": "Cliente cadastrado com sucesso!"}), 201

@app.route('/clientes', methods=['GET'])
def listar_clientes():
    return jsonify(clientes)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002)