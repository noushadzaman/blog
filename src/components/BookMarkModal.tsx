"use client";

import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BookMarkFolders from "./BookMarkFolders";

interface ModalProps {
  blogId: string;
}

const BookMarkModal: React.FC<ModalProps> = ({ blogId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [createNew, setCreateNew] = useState(false);
  const [checks, setChecks] = useState<string[]>([]);
  const [bookMarks, setBookMarks] = useState<Record<string, string[]>>({});
  const [newFolder, setNewFolder] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmarks");
    if (storedBookmarks !== null) {
      const object = JSON.parse(storedBookmarks);
      setBookMarks(object);

      Object.keys(object).forEach((key) => {
        const found = object[key]?.find((id: string) => id === blogId);
        if (found) {
          setChecks((prevChecks) => [...prevChecks, key]);
        }
      });
    } else {
      setBookMarks({
        Favorite: [],
      });
    }
  }, [blogId]);

  const handleAddFolder = () => {
    if (newFolder.length === 0 && inputRef.current) {
      inputRef.current.focus();
      return;
    }

    setBookMarks({
      ...bookMarks,
      [newFolder]: [],
    });
    setCreateNew(false);
    localStorage.setItem(
      "bookmarks",
      JSON.stringify({
        ...bookMarks,
        [newFolder]: [],
      })
    );
  };

  const handleBookMarks = () => {
    const updatedBookMarks = { ...bookMarks };

    Object.keys(updatedBookMarks).forEach((key) => {
      updatedBookMarks[key] = [
        ...updatedBookMarks[key].filter((mark) => mark !== blogId),
      ];
    });

    checks.forEach((check) => {
      if (updatedBookMarks[check]) {
        const exist = updatedBookMarks[check].find((mark) => mark === blogId);
        if (!exist) {
          updatedBookMarks[check] = [...updatedBookMarks[check], blogId];
        }
      }
    });
    setBookMarks(updatedBookMarks);

    localStorage.setItem("bookmarks", JSON.stringify(updatedBookMarks));
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="py-3 bg-gray-300 px-10 uppercase">
        Bookmark
      </DialogTrigger>

      <DialogContent>
        <DialogTitle className="text-center mb-5">ADD TO BOOKMARK</DialogTitle>
        <div className="space-y-7">
          {createNew ? (
            <>
              <Input
                ref={inputRef}
                onChange={(e) => setNewFolder(e.target.value)}
              />
            </>
          ) : (
            <BookMarkFolders
              bookMarks={bookMarks}
              checks={checks}
              setChecks={setChecks}
            />
          )}
          <div className="flex gap-2">
            <Button onClick={() => setCreateNew(!createNew)} className="w-full">
              {!createNew ? "create new" : "cancel"}
            </Button>
            <Button
              className="w-full"
              onClick={createNew ? handleAddFolder : handleBookMarks}
            >
              {createNew ? "Create" : "Done"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookMarkModal;
