Rails.application.routes.draw do
  resources :users
  resources :enrollments
  resources :participants
  resources :responses
  resources :surveys
  resources :trials


  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # # keeps the user logged in from the app component
  get "/me", to: "users#show"

  get "/participants/:id/trials", to: "participants#trial_list"

  get "/enrollments/by_trial/:trial_id", to: "enrollments#participant_ids"

  delete "/enrollments/cancel/:trial_id/:participant_id", to: "enrollments#delete_by_ids"

  get "/responses/by_survey/:survey_id", to: "responses#survey_ids"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
