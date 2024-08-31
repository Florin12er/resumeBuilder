"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid2";

interface Category {
  id: string;
  title: string;
  items: string[];
  column: "left" | "right";
}

interface TwoColumnResumeBuilderProps {
  onDataChange: (data: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
    categories: Category[];
  }) => void;
  initialData: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
    categories: Category[];
  };
}

const TwoColumnResumeBuilder: React.FC<TwoColumnResumeBuilderProps> = ({
  onDataChange,
  initialData,
}) => {
  const [name, setName] = useState(initialData.name);
  const [title, setTitle] = useState(initialData.title);
  const [email, setEmail] = useState(initialData.email);
  const [phone, setPhone] = useState(initialData.phone);
  const [location, setLocation] = useState(initialData.location);
  const [summary, setSummary] = useState(initialData.summary);
  const [categories, setCategories] = useState<Category[]>(
    initialData.categories,
  );

  const resumeData = useMemo(
    () => ({
      name,
      title,
      email,
      phone,
      location,
      summary,
      categories,
    }),
    [name, title, email, phone, location, summary, categories],
  );

  const handleDataChange = useCallback(() => {
    onDataChange(resumeData);
  }, [onDataChange, resumeData]);

  useEffect(() => {
    handleDataChange();
  }, [handleDataChange]);

  const addCategory = useCallback((column: "left" | "right") => {
    const newCategory: Category = {
      id: Date.now().toString(),
      title: "New Category",
      items: [],
      column,
    };
    setCategories((prev) => [...prev, newCategory]);
  }, []);

  const updateCategory = useCallback(
    (id: string, field: keyof Category, value: any) => {
      setCategories((prev) =>
        prev.map((cat) => (cat.id === id ? { ...cat, [field]: value } : cat)),
      );
    },
    [],
  );

  const addItemToCategory = useCallback((categoryId: string) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId ? { ...cat, items: [...cat.items, ""] } : cat,
      ),
    );
  }, []);

  const updateCategoryItem = useCallback(
    (categoryId: string, index: number, value: string) => {
      setCategories((prev) =>
        prev.map((cat) =>
          cat.id === categoryId
            ? {
                ...cat,
                items: cat.items.map((item, i) => (i === index ? value : item)),
              }
            : cat,
        ),
      );
    },
    [],
  );

  const deleteCategory = useCallback((id: string) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== id));
  }, []);

  const deleteCategoryItem = useCallback(
    (categoryId: string, index: number) => {
      setCategories((prev) =>
        prev.map((cat) =>
          cat.id === categoryId
            ? { ...cat, items: cat.items.filter((_, i) => i !== index) }
            : cat,
        ),
      );
    },
    [],
  );

  return (
    <Box sx={{ p: 3, backgroundColor: "background.default" }}>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }} variant="outlined">
        <Typography variant="h5" gutterBottom>
          Resume Information
        </Typography>
        <TextField
          fullWidth
          label="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Your Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          multiline
          rows={4}
          sx={{ mb: 2 }}
        />
      </Paper>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={3} sx={{ p: 3, height: "100%" }} variant="outlined">
            <Typography variant="h6" gutterBottom>
              Left Column
            </Typography>
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={() => addCategory("left")}
              sx={{ mb: 2 }}
            >
              Add Category
            </Button>
            {categories
              .filter((cat) => cat.column === "left")
              .map((category) => (
                <Box key={category.id} sx={{ mb: 3 }}>
                  <TextField
                    fullWidth
                    label="Category Title"
                    value={category.title}
                    onChange={(e) =>
                      updateCategory(category.id, "title", e.target.value)
                    }
                    sx={{ mb: 1 }}
                  />
                  {category.items.map((item, index) => (
                    <Box key={index} sx={{ display: "flex", mb: 1 }}>
                      <TextField
                        fullWidth
                        value={item}
                        onChange={(e) =>
                          updateCategoryItem(category.id, index, e.target.value)
                        }
                      />
                      <IconButton
                        onClick={() => deleteCategoryItem(category.id, index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  ))}
                  <Button
                    startIcon={<AddIcon />}
                    onClick={() => addItemToCategory(category.id)}
                    sx={{ mr: 1 }}
                  >
                    Add Item
                  </Button>
                  <Button
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteCategory(category.id)}
                    color="error"
                  >
                    Delete Category
                  </Button>
                </Box>
              ))}
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={3} sx={{ p: 3, height: "100%" }} variant="outlined">
            <Typography variant="h6" gutterBottom>
              Right Column
            </Typography>
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={() => addCategory("right")}
              sx={{ mb: 2 }}
            >
              Add Category
            </Button>
            {categories
              .filter((cat) => cat.column === "right")
              .map((category) => (
                <Box key={category.id} sx={{ mb: 3 }}>
                  <TextField
                    fullWidth
                    label="Category Title"
                    value={category.title}
                    onChange={(e) =>
                      updateCategory(category.id, "title", e.target.value)
                    }
                    sx={{ mb: 1 }}
                  />
                  {category.items.map((item, index) => (
                    <Box key={index} sx={{ display: "flex", mb: 1 }}>
                      <TextField
                        fullWidth
                        value={item}
                        onChange={(e) =>
                          updateCategoryItem(category.id, index, e.target.value)
                        }
                      />
                      <IconButton
                        onClick={() => deleteCategoryItem(category.id, index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  ))}
                  <Button
                    startIcon={<AddIcon />}
                    onClick={() => addItemToCategory(category.id)}
                    sx={{ mr: 1 }}
                  >
                    Add Item
                  </Button>
                  <Button
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteCategory(category.id)}
                    color="error"
                  >
                    Delete Category
                  </Button>
                </Box>
              ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TwoColumnResumeBuilder;
