from flask import Flask, render_template, redirect, url_for, session, request

app = Flask(__name__)
app.secret_key = "chave_secreta"  # Chave secreta para gerenciar sessões no Flask

# Rota de administração (protegida por login)
@app.route("/admin")
def admin():
    if "user" in session:  # Verifica se o usuário está logado
        return render_template("admin.html")  # Página de administração
    else:
        return redirect(url_for("login"))  # Redireciona para a página de login se não estiver logado

# Rota de login
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]
        
        # Validação de credenciais (substitua por banco de dados real no futuro)
        if email == "admin@example.com" and password == "admin123":
            session["user"] = email  # Armazena o email na sessão
            return redirect(url_for("admin"))  # Redireciona para a página de administração
        else:
            error_message = "Credenciais inválidas"
            return render_template("login.html", error=error_message)  # Exibe a mensagem de erro na página de login

    return render_template("login.html")  # Renderiza a página de login

# Rota de home
@app.route("/home")
def home():
    return render_template("home.html")  # Renderiza a página de home

# Rota de cadastro
@app.route("/cadastro")
def cadastro():
    return render_template("cadastro.html")  # Renderiza a página de cadastro

if __name__ == "__main__":
    app.run(debug=True)
