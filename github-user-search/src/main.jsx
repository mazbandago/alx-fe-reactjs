import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './crouting.js'
import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import React from 'react';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router = {router}/>
    </QueryClientProvider>
  </StrictMode>,
)



https://www.otriviata.com/api.php?amount=30