// src/components/JobOpeningPage.js
import React, { useState } from 'react';
import { Container, Box, TextField, TextareaAutosize, Button, MenuItem, Select, FormControl, InputLabel, FormGroup, FormControlLabel, Switch } from '@mui/material';

const userResumeNames = ['fullstack-resume', 'backend-resume', 'frontend-resume'];

const defaultJobOpening = {
  organisation: 'Google',
  designation: 'SDE 1',
  lastModified: Date.now(),
  lastDate: new Date(),
  jobLink: 'https://google.com',
  status: 'APPLIED',
  resume: [],
};

const JobOpeningPage = () => {
  const [jobOpening, setJobOpening] = useState(defaultJobOpening);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setJobOpening((prevJobOpening) => ({
      ...prevJobOpening,
      [name]: value,
    }));
  };

  const handleSwitchChange = (event) => {
    const { name, checked } = event.target;
    setJobOpening((prevJobOpening) => ({
      ...prevJobOpening,
      [name]: checked ? 'APPLIED' : 'PENDING',
    }));
  };

  const handleSave = () => {
    // Implement your save logic here
    console.log('Job Opening saved:', jobOpening);
  };

  const handleDelete = () => {
    // Implement your delete logic here
    console.log('Job Opening deleted');
  };

  const isLinkValid = () => {
    // Implement your URL validation logic here
    // Example: Simple check for "https://" prefix
    return jobOpening.jobLink.startsWith('https://');
  };

  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <TextField
          fullWidth
          label="Organisation"
          name="organisation"
          value={jobOpening.organisation}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Designation"
          name="designation"
          value={jobOpening.designation}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Job Link"
          name="jobLink"
          value={jobOpening.jobLink}
          onChange={handleChange}
          error={!isLinkValid()}
          helperText={!isLinkValid() && 'Invalid URL'}
          margin="normal"
        />

        <FormControl fullWidth margin="normal">
          <InputLabel id="resume-label">Resume</InputLabel>
          <Select
            labelId="resume-label"
            id="resume"
            name="resume"
            multiple
            value={jobOpening.resume}
            onChange={handleChange}
            renderValue={(selected) => selected.join(', ')}
          >
            {userResumeNames.map((resumeName) => (
              <MenuItem key={resumeName} value={resumeName}>
                {resumeName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            id="status"
            name="status"
            value={jobOpening.status}
            onChange={handleChange}
          >
            <MenuItem value="APPLIED">APPLIED</MenuItem>
            <MenuItem value="PENDING">PENDING</MenuItem>
          </Select>
        </FormControl>

        <FormGroup>
          <FormControlLabel
            control={<Switch checked={jobOpening.status === 'APPLIED'} onChange={handleSwitchChange} name="status" />}
            label="APPLIED"
          />
        </FormGroup>

        <TextareaAutosize
          minRows={3}
          maxRows={10}
          placeholder="Description"
          style={{ width: '100%', marginTop: '16px' }}
          name="description"
          value={jobOpening.description}
          onChange={handleChange}
        />

        <Box mt={4}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
          <Button variant="contained" color="secondary" onClick={handleDelete} style={{ marginLeft: '8px' }}>
            Delete
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default JobOpeningPage;
