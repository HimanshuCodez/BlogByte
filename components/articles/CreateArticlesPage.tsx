import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const CreateArticlesPage = () => {
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
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateArticlesPage;
