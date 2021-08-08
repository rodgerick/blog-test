import { Form } from 'semantic-ui-react'

const Create = () => (
  <div className="create">
    <h2>Create a new blog</h2>
    <Form>
      <Form.Field required>
        <label>Title</label>
        <input placeholder="Title" />
      </Form.Field>
      <Form.Field required>
        <label>Author Name (first and last)</label>
        <input placeholder="Name" />
      </Form.Field>
      <Form.TextArea
        required
        label="What are you writing about?"
        placeholder="Type what you want here..."
      />
     <Form.Button>Submit</Form.Button>
    </Form>
  </div>
);
 
export default Create;