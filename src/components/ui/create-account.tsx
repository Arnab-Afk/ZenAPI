"use client"

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

// Type declaration for window.electron
declare global {
  interface Window {
    electron: {
      shell: {
        openExternal: (url: string) => Promise<void>;
      };
    }
  }
}

export function CreateAccount() {
  const handleGoogleClick = async () => {
    try {
      const redirectUrl = encodeURIComponent('http://localhost:3000/callback');
      const googleAuthUrl = `https://small-mouse-2759.arnabbhowmik019.workers.dev/google/auth?redirect_url=${redirectUrl}`;
      
      if (window.electron?.shell) {
        // Open in system's default browser using Electron
        await window.electron.shell.openExternal(googleAuthUrl);
      } else {
        // Fallback for non-Electron environments
        window.location.href = googleAuthUrl;
      }
    } catch (error) {
      console.error('Failed to open URL in external browser:', error);
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline" onClick={() => console.log("Github clicked")}>
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="outline" onClick={handleGoogleClick}>
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default CreateAccount;