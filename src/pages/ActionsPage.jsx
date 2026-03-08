import Impact from '../components/Impact';
import ActionCards from '../components/ActionCards';
import CrowdfundingCards from '../components/CrowdfundingCards';

const ActionsPage = () => {
    return (
        <div className="pt-24 min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-display font-bold text-slate-900 mb-6 border-b pb-4">Nos Actions sur le Terrain</h1>
                <p className="text-lg text-slate-600 max-w-3xl mb-12">
                    Parce que les mots ne suffisent pas, l'Association des Jeunes en Action Tosungana (A.J.A.T) mène des actions concrètes tout au long de l'année. Voici l'impact chiffré de nos interventions et les statistiques de nos réussites.
                </p>
            </div>

            <ActionCards />
            <CrowdfundingCards />
            <Impact />
        </div>
    );
};

export default ActionsPage;
