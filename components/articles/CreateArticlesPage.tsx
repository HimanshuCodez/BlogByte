"use client"
import React,{ useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import 'react-quill-new/dist/quill.snow.css';
import dynamic from "next/dynamic";
import { Button } from "../ui/button";
const ReactQuill = dynamic(()=>import('react-quill-new'),{ssr:false});
const CreateArticlesPage = () => {
const [content,setContent] = useState(" ")
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Create New Article</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Input
                type="text"
                name="title"
                placeholder=" Enter Article Title"
              />
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <select className="flex h-10 w-full rounded-md">
                <option value="">Select a Category</option>
                <option value="tech">Tech</option>
                <option value="politics">Politics</option>
                <option value="sports">Sports</option>
                <option value="dramas">Dramas</option>
                <option value="development">Development</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="featuredImage">Featured Image</Label>
              <Input
                type="file"
                name="featuredImage"
                id="featuredImage"
                accept="image/*"
              />
            </div>
            <div className="space-y-2">
              <Label>Content</Label>
              <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              />
              
            </div>
            <div className="flex justify-end gap-4">
<Button  variant={'outline'}>Cancel</Button>
<Button type="submit" >Publish Article</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateArticlesPage;
