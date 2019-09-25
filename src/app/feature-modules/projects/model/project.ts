import { StatusDate, IntentionByGeneAttribute, IntentionByLocationAttribute } from '..';
import { ProjectLinks } from './project-links';
import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/model/adapter';

export class Project {
    id: number;
    tpn: string;
    privacyName: string;
    assignmentStatusName: string;
    assignmentStatusDates: StatusDate[];
    withdrawn: boolean;
    recovery: boolean;
    intentionByGeneAttributes: IntentionByGeneAttribute[];
    intentionByLocationAttributes: IntentionByLocationAttribute[];
    imitsMiPlanId: number;
    comment: string;
    isActive: boolean;
    _links: ProjectLinks;
}

@Injectable({
    providedIn: 'root'
})
export class ProjectAdapter implements Adapter<Project> {
    adapt(item: any): Project {
        console.log('item>>>>', item);

        const project: Project = item;
        if (project._links) {
            if (project._links.production_plans) {
                project._links.production_plans = this.convertElementToArray(project._links.production_plans);
            }

            if (project._links.phenotyping_plans) {
                project._links.phenotyping_plans = this.convertElementToArray(project._links.phenotyping_plans);
            }
        } else {
            project._links = new ProjectLinks();
        }
        return project;
    }

    private convertElementToArray(element: any): any[] {
        if (!Array.isArray(element)) {
            return [element];
        }
        return element;
    }
}
