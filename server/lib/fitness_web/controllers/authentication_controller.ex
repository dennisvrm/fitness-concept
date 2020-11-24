defmodule FitnessWeb.AuthenticationController do
  use FitnessWeb, :controller

  def authenticate(conn, params) do
    cond do
      params["email"] == nil && params["password"] == nil
        -> send_resp(conn, 400, "Geen email en wachtwoord ingevuld.")
      params["email"] == nil
        -> send_resp(conn, 400, "Geen email ingevuld.")
      params["password"] == nil
        -> send_resp(conn, 400, "Geen wachtwoord ingevuld.")
      params["password"] != "test"
        -> send_resp(conn, 401, "Email of wachtwoord onjuist.")
      true
        case Repo.update(changeset) do
          {:ok, user} ->
          # user updated
          {:error, changeset} ->
          # an error occurred
        end

        -> conn |>
             fetch_session |>
             put_session(:userId, "1") |>
             render(
               "authentication.json",
               data: %{firstName: "Dennis",
                        lastName: "Vreman",
                        email: "dennisvreman@me.com",
                        userId: 1}
             )
    end
  end

end
