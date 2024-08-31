"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

interface Category {
  id: string;
  title: string;
  items: string[];
}

interface SingleColumnResumeBuilderProps {
  onDataChange: (data: any) => void;
  initialData: {
    name: string;
    title: string;
    summary: string;
    email: string;
    phone: string;
    location: string;
    categories: Category[];
  };
}

const SingleColumnResumeBuilder: React.FC<SingleColumnResumeBuilderProps> = ({
  onDataChange,
  initialData,
}) => {
  const [name, setName] = useState(initialData.name);
  const [title, setTitle] = useState(initialData.title);
  const [summary, setSummary] = useState(initialData.summary);
  const [email, setEmail] = useState(initialData.email);
  const [phone, setPhone] = useState(initialData.phone);
  const [location, setLocation] = useState(initialData.location);
  const [categories, setCategories] = useState<Category[]>(
    initialData.categories,
  );

  const handleDataChange = useCallback(() => {
    onDataChange({ name, title, summary, email, phone, location, categories });
  }, [name, title, summary, email, phone, location, categories, onDataChange]);

  useEffect(() => {
    handleDataChange();
  }, [handleDataChange]);

  const addCategory = () => {
    setCategories([
      ...categories,
      { id: Date.now().toString(), title: "New Category", items: [] },
    ]);
  };

  const updateCategory = (id: string, field: keyof Category, value: string) => {
    setCategories(
      categories.map((cat) =>
        cat.id === id ? { ...cat, [field]: value } : cat,
      ),
    );
  };

  const addItemToCategory = (categoryId: string) => {
    setCategories(
      categories.map((cat) =>
        cat.id === categoryId ? { ...cat, items: [...cat.items, ""] } : cat,
      ),
    );
  };

  const updateCategoryItem = (
    categoryId: string,
    index: number,
    value: string,
  ) => {
    setCategories(
      categories.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              items: cat.items.map((item, i) => (i === index ? value : item)),
            }
          : cat,
      ),
    );
  };

  const deleteCategory = (id: string) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  const deleteCategoryItem = (categoryId: string, index: number) => {
    setCategories(
      categories.map((cat) =>
        cat.id === categoryId
          ? { ...cat, items: cat.items.filter((_, i) => i !== index) }
          : cat,
      ),
    );
  };

  return (
    <Box sx={{ p: 2 }} bgcolor="background.paper">
      <Typography variant="h5" gutterBottom>
        Single Column Resume Builder
      </Typography>
      <TextField
        fullWidth
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        margin="normal"
        multiline
        rows={4}
      />
      <Divider sx={{ my: 2 }} />
      <Button startIcon={<AddIcon />} onClick={addCategory} variant="outlined">
        Add Category
      </Button>
      {categories.map((category) => (
        <Box key={category.id} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Category Title"
            value={category.title}
            onChange={(e) =>
              updateCategory(category.id, "title", e.target.value)
            }
            margin="normal"
          />
          <List>
            {category.items.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemText>
                  <TextField
                    fullWidth
                    value={item}
                    onChange={(e) =>
                      updateCategoryItem(category.id, index, e.target.value)
                    }
                    margin="dense"
                  />
                </ListItemText>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteCategoryItem(category.id, index)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
          <Button
            startIcon={<AddIcon />}
            onClick={() => addItemToCategory(category.id)}
            size="small"
          >
            Add Item
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            onClick={() => deleteCategory(category.id)}
            color="error"
            size="small"
            sx={{ ml: 1 }}
          >
            Delete Category
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default SingleColumnResumeBuilder;
