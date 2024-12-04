from flask import Flask, request, jsonify, render_template, redirect, session, url_for
from werkzeug.security import check_password_hash

app = Flask(__name__)
app.secret_key = "sua_chave_secreta_aqui"  # Necessário para usar 'session'

# Dados fictícios - Substitua pelo banco de dados
users = {
    "empresa@exemplo.com": {
        "password": "hashed_password_aqui",  # Substitua por senhas realmente hashadas
    }
}

@app.route("/api/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    user = users.get(email)
    if user and check_password_hash(user["password"], password):
        session["logged_in"] = True  # Define o usuário como logado
        return jsonify({"success": True})
    return jsonify({"success": False, "message": "Email ou senha inválidos!"})

@app.route("/login", methods=["GET", "POST"])
def login_page():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")

        user = users.get(email)
        if user and check_password_hash(user["password"], password):
            session["logged_in"] = True
            return redirect("/admin")
        return render_template("login.html", error="Email ou senha inválidos!")

    return render_template("login.html")

@app.route("/admin")
def admin_page():
    if not session.get("logged_in"):
        return redirect(url_for("login_page"))  # Redireciona para a página de login
    return render_template("admin.html")

@app.route("/logout")
def logout():
    session.pop("logged_in", None)  # Remove o usuário da sessão
    return redirect(url_for("login_page"))

if __name__ == "__main__":
    app.run(debug=True)
