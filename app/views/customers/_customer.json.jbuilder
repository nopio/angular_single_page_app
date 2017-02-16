json.extract! customer, :id, :name, :email, :street, :city, :post_code, :created_at, :updated_at
json.url customer_url(customer, format: :json)