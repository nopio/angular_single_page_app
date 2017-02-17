json.set! :customer do
  json.partial! "customers/customer", customer: @customer
end

json.set! :repairs do
  json.array! @customer.repairs, partial: 'repairs/repair', as: :repair
end

json.set! :repair_statuses do
  json.array! Repair.statuses_json
end
