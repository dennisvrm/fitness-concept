defmodule FitnessWeb.RegisterController do
  use FitnessWeb, :controller

  def register(conn, params) do
    cond do
      params["firstName"] == nil ||
      params["lastName"] == nil ||
      params["email"] == nil ||
      params["password"] == nil ||
      params["passwordRepeated"] == nil
        -> send_resp(conn, 400, "Niet alle gegevens zijn ingevuld.");
      params["password"] != params["passwordRepeated"]
        -> send_resp(conn, 400, "De wachtwoorden komen niet overeen.");
      true
        -> send_resp(conn, 200, "Registratie geslaagd.")
    end
  end

end
