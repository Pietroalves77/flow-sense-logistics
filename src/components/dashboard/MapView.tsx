
import { useRef, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layers, MapPin } from "lucide-react";

const MapView = () => {
  // We'll simulate a map here with a placeholder
  // In a real app, you would integrate with a mapping library like Google Maps or Mapbox
  
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsMapLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="h-[500px] sm:h-[400px]">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Live Fleet Tracking</CardTitle>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Layers className="h-4 w-4 mr-1" /> Layers
          </Button>
          <Button variant="outline" size="sm">
            <MapPin className="h-4 w-4 mr-1" /> Locate
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0 h-[calc(100%-60px)]">
        <div ref={mapContainerRef} className="h-full w-full p-0 relative">
          {!isMapLoaded ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="animate-pulse text-center">
                <div className="h-16 w-16 rounded-full bg-trackflow-blue/20 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-trackflow-blue animate-bounce" />
                </div>
                <p className="text-muted-foreground">Loading map...</p>
              </div>
            </div>
          ) : (
            <>
              <div className="absolute inset-0 bg-gray-100 overflow-hidden">
                {/* Simulated map with CSS */}
                <div className="w-full h-full" style={{ 
                  backgroundImage: `url('https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_square_small.gif')`,
                  backgroundPosition: 'center',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: '#f3f4f6',
                  opacity: 0.7
                }}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-lg text-gray-600 bg-white/80 p-3 rounded-md">
                  Map view will be integrated with a mapping provider
                </p>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MapView;
