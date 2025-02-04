from flask import Flask, jsonify, request

app = Flask(__name__)

vendas = []

@app.route('/vendas', methods=['POST'])
def realizar_venda():
    data = request.json
    vendas.append(data)
    return jsonify({"message": "Venda realizada com sucesso!"}), 201

@app.route('/vendas', methods=['GET'])
def listar_vendas():
    return jsonify(vendas)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5003)