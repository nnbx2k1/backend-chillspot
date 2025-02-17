import { Email } from '../db/models/emails.js'


export async function emailsRoutes(app) {
    
  app.post('/', async (req, res) => {
    try {
      const email = req.body.email;
  
      if (!email) {
        return res.status(400).json({ error: 'Email is required' });
      }
  
      // Check if the email already exists in the database
      const existingEmail = await Email.findOne({ email });
      if (existingEmail) {
        return res.status(409).json({ message: 'Email already exists' });
      }
  
      // Save the new email if it doesn't exist
      const newEmail = new Email({ email });
      await newEmail.save();
  
      res.status(201).json({ message: 'Email saved successfully' });
    } catch (error) {
      console.error('Error saving email:', error);
      res.status(500).json({ error: 'Failed to save email' });
    }
  });
  
      
}