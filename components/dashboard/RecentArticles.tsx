import React from "react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const RecentArticles = () => {
  return (
    <Card className="mb-8 ">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Recent Articles</CardTitle>
          <Button
            className="text-muted-foreground"
            size={"sm"}
            variant={"ghost"}
          >
            View All →
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default RecentArticles;
