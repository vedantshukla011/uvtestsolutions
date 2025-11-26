-- Create quote_requests table to store all quote submissions
CREATE TABLE public.quote_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  industry TEXT,
  product_interest TEXT[] NOT NULL,
  timeline TEXT,
  budget_range TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert quote requests (public form)
CREATE POLICY "Anyone can submit quote requests"
ON public.quote_requests
FOR INSERT
TO anon
WITH CHECK (true);

-- Only authenticated users can view all quotes (for admin purposes later)
CREATE POLICY "Authenticated users can view all quotes"
ON public.quote_requests
FOR SELECT
TO authenticated
USING (true);

-- Create index for faster queries on created_at
CREATE INDEX idx_quote_requests_created_at ON public.quote_requests(created_at DESC);