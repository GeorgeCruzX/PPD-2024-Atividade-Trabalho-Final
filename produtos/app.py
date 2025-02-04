from flask import Flask, jsonify, request

app = Flask(__name__)

produtos = []

@app.route('/produtos', methods=['POST'])
def cadastrar_produto():
    data = request.json
    produtos.append(data)
    return jsonify({"message": "Produto cadastrado com sucesso!"}), 201

@app.route('/produtos', methods=['GET'])
def listar_produtos():
    return jsonify(produtos)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)