import { Sidebar } from "../../components/sidebar";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import folder from "../../assets/icons/folder.svg";
import {  useState } from "react";
import { Button } from "../../components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,

  DropdownMenuItem,

  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "../../components/ui/field";


export const Uploads = () => {
  const testdata = [
    {
      Project_Test: {
        Documents: [
          {
            name: "Report_Q1.docx",
            type: "document",
            size_kb: 120,
            created: "2025-01-15",
          },
          {
            name: "Meeting_Notes.txt",
            type: "text",
            size_kb: 8,
            created: "2025-01-20",
          },
          {
            name: "Budget_2026.xlsx",
            type: "spreadsheet",
            size_kb: 45,
            created: "2025-02-01",
          },
        ],
        Images: [
          {
            name: "Logo_Test.png",
            type: "image",
            size_kb: 256,
            created: "2025-01-10",
          },
          {
            name: "Screenshot1.jpg",
            type: "image",
            size_kb: 512,
            created: "2025-01-12",
          },
          {
            name: "Diagram.svg",
            type: "vector",
            size_kb: 32,
            created: "2025-01-18",
          },
        ],
        Data: [
          {
            name: "Sample_Data.csv",
            type: "csv",
            rows: 100,
            created: "2025-01-25",
          },
          {
            name: "Users.json",
            type: "json",
            records: 50,
            created: "2025-01-28",
          },
          {
            name: "Config.xml",
            type: "xml",
            created: "2025-01-30",
          },
        ],
        Archive: [
          {
            name: "Old_Report_2024.pdf",
            type: "pdf",
            size_kb: 300,
            created: "2024-12-10",
          },
          {
            name: "Backup_Jan2025.zip",
            type: "zip",
            size_kb: 1024,
            created: "2025-01-31",
          },
        ],
        SendData: [],
      },
    },
  ];

  const [showNewDialog, setShowNewDialog] = useState(false);
  const [file, setFile] = useState(null);
const handleUpload=(e)=>{
        setFile(e.target.files[0])
    
}
const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) return alert("Select a file first");

     const formData = new FormData();
  formData.append("file", file);
  setShowNewDialog(false)
  
}
  return (
    <Sidebar>
      <div className="bg-white mx-5 mt-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-5 py-4">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Folders</h3>
            <p className="text-sm text-gray-500">
              Browse and manage your documents
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button>
                  <PlusCircleIcon />
                  Add Folder
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-40" align="end">
                <DropdownMenuItem>Create Folder</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setShowNewDialog(true)}>
                  Upload file
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={showNewDialog} onOpenChange={setShowNewDialog}>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create New File</DialogTitle>
                  <DialogDescription>
                    Provide a name for your new file. Click create when
                    you&apos;re done.
                  </DialogDescription>
                </DialogHeader>

                <FieldGroup className="pb-3">
                  <Field >
                    <FieldLabel htmlFor="filename">Upload File</FieldLabel>
                    <Input
                      id="filename"
                      name="filename"
                      placeholder="document.txt"
                      type="file"
                      onChange={handleUpload}
                    />
                  </Field>
                </FieldGroup>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button
                    type="submit"
                 
                    onClick={handleSubmit}
                  >
                    Create
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="mx-5 mt-5">
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
            {testdata.map((item, idx) =>
              Object.entries(item.Project_Test).map(([folderName, files]) => {
                if (files.length === 0) return null; // skip empty folders

                return (
                  <div className="mx-4" key={`${idx}-${folderName}`}>
                    <Card
                      className="rounded-none py-2 border-none"
                      onClick={() => alert(`${folderName}`)}
                    >
                      <CardContent className="px-3">
                        <div className="flex items-center">
                          <img
                            src={folder}
                            alt="folder icon"
                            className="w-6 h-6 object-cover"
                          />
                          <h4 className="text-lg mx-2">{folderName}</h4>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </Sidebar>
  );
};
