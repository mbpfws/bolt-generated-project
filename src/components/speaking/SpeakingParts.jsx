import React from 'react';
    import { Link } from 'react-router-dom';
    import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
    import { Button } from "../ui/button";

    function SpeakingParts() {
      return (
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Part 1</CardTitle>
                <CardDescription>Introduction and Interview</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Practice answering common questions about familiar topics.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/speaking/part1" className="w-full">
                  <Button variant="gradient" className="w-full">
                    Start Practice
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Part 2</CardTitle>
                <CardDescription>Individual Long Turn</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Develop your ability to speak at length about a specific topic.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/speaking/part2" className="w-full">
                  <Button variant="gradient" className="w-full">
                    Start Practice
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Part 3</CardTitle>
                <CardDescription>Two-way Discussion</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Engage in detailed discussions about abstract topics.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/speaking/part3" className="w-full">
                  <Button variant="gradient" className="w-full">
                    Start Practice
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      );
    }

    export default SpeakingParts;
