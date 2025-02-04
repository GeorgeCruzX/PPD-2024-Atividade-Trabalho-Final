import mysql.connector

def init_db():
    conn = mysql.connector.connect(
        host="mysql-produtos",
        user="root",
        password="senha123",
        database="produtos_db"
    )
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS produtos (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            descricao TEXT,
            valor DECIMAL(10, 2) NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

if __name__ == '__main__':
    init_db()