const prompts = [
  // Greeting and Basic Assistance
  ["hello", "hi", "good morning", "good afternoon", "hey", "greetings"],
  
  // Help and Support Requests
  ["help", "i need help", "can you assist me", "support", "can you guide me"],
  
  // Refund and Returns
  ["refund", "return policy", "how to return", "money back", "refund process"],
  
  // Order Tracking
  ["order status", "track my order", "where is my package", "order tracking", "shipping status"],
  
  // Payment Issues
  ["payment issue", "billing problem", "payment failed", "transaction problem", "payment error"],
  
  // Contacting Human Support
  ["talk to agent", "human support", "contact support", "speak to an agent", "talk to a human"],
  
  // Product Issues
  ["product issue", "faulty product", "item damaged", "defective product", "broken item"],
  
  // Farewell
  ["bye", "goodbye", "exit", "thanks", "thank you", "see you later"],
  
  // Discounts and Offers
  ["discount", "offers", "coupon code", "promo code", "special offers"],
  
  // Delivery Information
  ["delivery time", "shipping time", "when will my package arrive", "estimated delivery"],
  
  // Order Cancellation
  ["cancel order", "order cancellation", "how to cancel my order", "cancel my order"],
  
  // Product Replacement
  ["replace item", "replacement policy", "exchange product", "replace my item"],
  
  // Account Issues
  ["account issue", "login problem", "forgot password", "can't access my account"],
  
  // Technical Issues
  ["technical issue", "website not working", "app not working", "technical support", "error"],
  
  // Feedback and Complaints
  ["feedback", "give feedback", "complaint", "complain", "suggestions"],
  
  // General Queries
  ["contact details", "how to contact", "phone number", "email address"]
]
const replies = [
  // Greeting and Basic Assistance
  ["Hello! Welcome to Customer Support. How can I assist you today?", "Hi there! How may I help you?", "Hello! How can I help you today?", "Hey! What can I assist you with?"],
  
  // Help and Support Requests
  ["I'm here to help. Can you describe the issue you're facing?", "Sure, I'm here for you! What do you need help with?", "I'm ready to assist! Please let me know your issue."],
  
  // Refund and Returns
  ["You can request a refund within 30 days of purchase. Would you like to proceed with that?", "To start a return, please visit the 'Orders' section on your account. Need assistance with that?", "Our refund policy allows for returns within 30 days. Would you like more details?"],
  
  // Order Tracking
  ["Please provide your order ID, and I'll help you track your package.", "Can you share your order ID? I’ll check the status for you.", "I can help track your order. Please provide the order ID."],
  
  // Payment Issues
  ["I understand you're facing a payment issue. Can you provide more details?", "Can you describe the payment error you're facing?", "It seems there's a payment issue. Do you have a transaction ID or any details to share?"],
  
  // Contacting Human Support
  ["Let me connect you to one of our support agents. Please hold on for a moment.", "I'm connecting you to a customer support representative now. One moment please!", "I’ll transfer you to a live agent. Please hold."],
  
  // Product Issues
  ["Sorry about the issue with your product. Can you describe the problem or share your order ID?", "I’m sorry for the inconvenience. Could you provide details on the issue with the product?", "Please let me know what’s wrong with the product, and I’ll assist you further."],
  
  // Farewell
  ["You're welcome! If you need further help, feel free to reach out anytime. Have a great day!", "Goodbye! If you have any other questions, don't hesitate to ask. Take care!", "Thank you! If you need anything else, I’m here to help. Goodbye!"],
  
  // Discounts and Offers
  ["We currently have a 10% discount on select items! Use code 'SAVE10' at checkout. Would you like to know more?", "There’s a promotion running right now. You can use 'SALE20' for a 20% discount! Would you like more info?", "You can apply coupon code 'DISCOUNT' for 15% off. Would you like to see eligible products?"],
  
  // Delivery Information
  ["Standard delivery takes 3-5 business days. Would you like to check your order's status?", "Your package will arrive in 3-4 business days. Would you like to track it?", "Our express shipping takes 1-2 days. Can I assist with tracking your order?"],
  
  // Order Cancellation
  ["To cancel your order, please provide your order ID or visit the 'My Orders' section on our website.", "Please visit your 'Orders' section to cancel your order. Let me know if you need assistance.", "I can help with order cancellation. Can you provide your order ID or visit the cancellation section in your account?"],
  
  // Product Replacement
  ["We can help replace the item. Please share your order details, and we’ll guide you through the process.", "If you'd like to exchange the product, please let me know the details, and we’ll help you with the replacement.", "To request a replacement, please share your order ID and product details. We’ll get it sorted for you!"],
  
  // Account Issues
  ["If you're facing login issues, try resetting your password. Would you like assistance with that?", "You can reset your password by clicking on 'Forgot Password.' Let me know if you need help.", "Can you please provide more details about your account issue? I'll guide you through it."],
  
  // Technical Issues
  ["We’re sorry for the inconvenience. Can you describe the technical issue you're facing?", "Please let me know what’s not working so I can assist you with the technical issue.", "Can you provide more details about the error you're seeing? I'll forward this to the tech team if needed."],
  
  // Feedback and Complaints
  ["We value your feedback! Please let us know how we can improve our services.", "We’re always looking to improve. Please feel free to share any feedback or complaints.", "Thank you for sharing your thoughts with us. Please tell us what you’d like to see improved."],
  
  // General Queries
  ["You can contact us at support@ourcompany.com or call us at 123-456-7890.", "For inquiries, you can email us at support@ourcompany.com or reach us at our helpline.", "For support, please reach out to support@ourcompany.com or call 123-456-7890."]
];

