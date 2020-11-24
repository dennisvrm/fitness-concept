defmodule FitnessWeb.FriendsController do
  use FitnessWeb, :controller

  def friends(conn, params) do
    cond do
      params["userId"] == nil || fetch_session(conn) |> get_session(:userId) != params["userId"]
        -> send_resp(conn, 401, "Je bent niet ingelogd.")
      true
        -> render(
             conn,
             "friends.json",
             data: [%{ firstName: "Dennis" }, %{ firstName: "Naam 2" }, %{ firstName: "Naam 3" }]
           )
    end
  end

  def recommendedFriends(conn, params) do
    cond do
      params["userId"] == nil || fetch_session(conn) |> get_session(:userId) != params["userId"]
        -> send_resp(conn, 401, "Je bent niet ingelogd.")
      true
        -> render(
             conn,
             "friends.json",
             data: [%{ firstName: "Dennis 1" }, %{ firstName: "Naam 4" }]
           )
    end
  end

  def addFriend(conn, params) do
    cond do
      params["userId"] == nil || fetch_session(conn) |> get_session(:userId) != params["userId"]
        -> send_resp(conn, 401, "Je bent niet ingelogd.")
      params["firstName"] == nil
        -> send_resp(conn, 400, "Je hebt geen vriend meegegeven.")
      true
        -> render(
             conn,
             "friends.json",
             data: %{ firstName: params["firstName"] }
           )
    end
  end

end
