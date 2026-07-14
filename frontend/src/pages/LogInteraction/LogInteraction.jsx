import InteractionForm from "../../components/InteractionForm/InteractionForm";
import ChatInterface from "../../components/ChatInterface/ChatInterface";
import InteractionList from "../../components/InteractionList/InteractionList";

function LogInteraction() {
  return (
    <>
      <div className="container">
        <InteractionForm />
        <ChatInterface />
      </div>

      <div className="container">
        <InteractionList />
      </div>
    </>
  );
}

export default LogInteraction;