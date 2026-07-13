
import { Badge } from "./components/ui/badge";
import { Card,CardContent,CardHeader,CardTitle } from "./components/ui/card";

import { Checkbox } from "./components/ui/checkbox";


export default function batch() {
  return (<>
    <div>
      <Badge className='bg-yellow-300 text-white'variant={"secondary"}>badge</Badge>
    </div>

    <div>
      <Card className="w-sm bg-[#305FEC]">
        <CardHeader>
          <CardTitle>shipped orders</CardTitle>
        </CardHeader>
        <CardContent>67</CardContent>
      </Card>
    </div>
    <div>
      <Checkbox className='rounded-3xl bg-red-400 data-checked:bg-yellow-200'>

      </Checkbox>
    </div>
    <div>
      
    
    
    </div>
    </>
  )
}
