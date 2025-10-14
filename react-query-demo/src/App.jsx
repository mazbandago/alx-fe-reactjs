
import React from 'react'
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <h1>This is the main app page</h1>
      </QueryClientProvider>
    
  )
}

export default App;