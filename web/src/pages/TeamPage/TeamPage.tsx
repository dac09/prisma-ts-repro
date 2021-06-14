import TeamsLayout from 'src/layouts/TeamsLayout'
import TeamCell from 'src/components/TeamCell'

const TeamPage = ({ id }: { id: string }) => {
  return (
    <TeamsLayout>
      <TeamCell id={id} />
    </TeamsLayout>
  )
}

export default TeamPage
