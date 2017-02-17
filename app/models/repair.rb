class Repair < ApplicationRecord
  belongs_to :customer

  validates :name, :description, :status, :price, :customer, presence: true

  enum status: %i(new_item in_progress done)

  def self.search(query, customer_id)
    q = "%#{query}%"
    status = status_number(query)

    where(customer_id: customer_id).
    where('description LIKE :query OR
           name LIKE :query OR
           price LIKE :query OR
           status = :status',
           query: q, status: status)
  end

  def self.status_number(name)
    q = name.parameterize('_')
    statuses[q] if statuses.keys.include?(q)
  end

  def self.statuses_json
    statuses.map do |k, v|
      {
        id: v,
        name: k
      }
    end
  end
end
